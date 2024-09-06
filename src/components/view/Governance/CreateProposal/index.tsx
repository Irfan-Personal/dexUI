import { useEffect, useMemo, useState } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box, Typography } from '@mui/material';

import { InputComponent, UrlInputComponent } from 'components';
import { MAX_LENGTH_METADATA_LINK, MAX_LENGTH_METADATA_SUMMARY, MAX_LENGTH_METADATA_TITLE, MAX_LENGTH_PROPOSAL_TEXT, ProposalType } from 'consts';
import { CreateProposalViewStyle } from './index.style';
import { SelectProposalTypeComponent } from './SelectProposalType';
import { IncentivizationProposal } from './IncentivizationProposal';
import { ButtonComponent } from 'components/common/Button';
import { IPool, IProposal } from 'models';
import { ConfirmCreateProposalModal } from './ConfirmCreateProposalModal';

export interface ICreateProposalViewProps {
  pools: IPool[],
  onSubmit: (proposal: IProposal) => void,
  onCloseProposalSubmitted: () => void,
}

export const CreateProposalView: React.FC<ICreateProposalViewProps> = (props) => {
  const { pools, onSubmit } = props;

  const [proposalType, setProposalType] = useState<ProposalType>();
  const [openCreateProposalModal, setOpenCreateProposalModal] = useState<boolean>(false);
  const [proposal, setProposal] = useState<IProposal>();

  const schema = useMemo(() => {
    const schemaObject: {
      author: Yup.StringSchema,
      title: Yup.StringSchema,
      summary: Yup.StringSchema,
      description: Yup.StringSchema,
      link: Yup.StringSchema,
      poolID?: Yup.StringSchema,
      multiplier?: Yup.NumberSchema,
    }
      = {
        author: Yup.string().required(),
        title: Yup.string().required(),
        summary: Yup.string().required(),
        description: Yup.string().required(),
        link: Yup.string().url(),
      };
    if (proposalType === ProposalType.PoolIncentivization) {
      schemaObject.multiplier = Yup.number().required();
      schemaObject.poolID = Yup.string().required();
    }
    return Yup.object().shape(schemaObject);
  }, [proposalType]);

  const { register, trigger, handleSubmit, formState: { isValid }, watch } = useForm<IProposal>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onChangeProposalType = (value: ProposalType) => {
    setProposalType(value);
  };

  const onSubmitHandler = (data: IProposal) => {
    setOpenCreateProposalModal(true);
    if (proposalType) {
      setProposal({
        ...data,
        proposalType,
      });
    }
  };

  useEffect(() => {
    trigger();
  }, [proposalType, trigger]);

  return (
    <CreateProposalViewStyle>
      <Box className="create-proposal-path">
        <Typography variant="h5">Home</Typography>
        <FontAwesomeIcon icon={faChevronRight} />
        <Typography variant="h5">Governance</Typography>
        <FontAwesomeIcon icon={faChevronRight} />
        <Typography variant="h5">Create a Proposal</Typography>
      </Box>
      <Box className="create-proposal">
        <Box className="create-proposal-header">
          <Typography className="create-proposal-title" variant="h3">Create proposal</Typography>
          <Typography className="create-proposal-description" variant="body1">
            Choose the type of proposal and fill in the fields to submit a proposal.<br />
            To create a proposal, you need a minimum of <span>100,000</span> DEX Tokens to be eligible to create one.
          </Typography>
        </Box>
        <Box className="create-proposal-body">
          <Box component={'form'} onSubmit={handleSubmit(onSubmitHandler)}>
            <Box className="proposal-author-box">
              <InputComponent
                name="author"
                label="Author"
                placeholder="author name, organization or foundation name"
                register={register}
                watch={watch}
              />
            </Box>
            <Box className="proposal-info-box">
              <SelectProposalTypeComponent
                label="Select a proposal type"
                onChange={onChangeProposalType}
              />
              {
                proposalType === ProposalType.PoolIncentivization &&
                <IncentivizationProposal
                  pools={pools}
                  className="proposal-incentivization"
                  register={register}
                />
              }
              <InputComponent
                name="title"
                className="proposal-title"
                label="Title"
                placeholder="Add title"
                maxLength={MAX_LENGTH_METADATA_TITLE}
                register={register}
                watch={watch}
              />
              <InputComponent
                name="summary"
                className="proposal-summary"
                label="Summary"
                placeholder="Add summary"
                multiline
                minRows={3}
                maxRows={3}
                maxLength={MAX_LENGTH_METADATA_SUMMARY}
                register={register}
                watch={watch}
              />
              <InputComponent
                name="description"
                className="proposal-description"
                label="Description"
                placeholder="Add description"
                multiline
                minRows={7}
                maxRows={7}
                maxLength={MAX_LENGTH_PROPOSAL_TEXT}
                register={register}
                watch={watch}
              />
              <UrlInputComponent
                name="link"
                className="proposal-link"
                label={<>Discussions to <Typography variant="caption">(optional)</Typography></>}
                placeholder="Link"
                maxLength={MAX_LENGTH_METADATA_LINK}
                register={register}
                watch={watch}
              />
              <ButtonComponent
                data-testid="create-proposal-sumbit"
                type="submit"
                disabled={!isValid || !proposalType}
                loading={openCreateProposalModal}
              >
                <Typography variant="body1">
                  Create Proposal (5000 LSK)
                </Typography>
              </ButtonComponent>
            </Box>
          </Box>
        </Box>
      </Box>
      {
        proposal && openCreateProposalModal &&
        <ConfirmCreateProposalModal
          proposal={proposal}
          onConfirm={() => { onSubmit(proposal); }}
          onClose={() => { setOpenCreateProposalModal(false); }}
        />
      }
    </CreateProposalViewStyle >
  );
};