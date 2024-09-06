import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { Grid, Typography } from '@mui/material';

import { menuItems } from 'consts';
import { FooterStyle } from './index.style';
import { compareUrl } from 'utils';

export const Footer: React.FC = () => {
  const router = useRouter();
  const { pathname } = router || { pathname: '' };

  return (
    <FooterStyle className="footer-container" maxWidth="xl" data-testid="footer">
      <Grid className="footer-menu" container spacing={1}>
        {
          menuItems.map((item, index) => (
            <Link href={item.href} passHref legacyBehavior key={item.href}>
              <Grid
                key={index}
                className={cn({
                  'footer-menu-item': true,
                  'active': compareUrl(pathname, item.href),
                })}
                item
                xs={3}
              >
                <Typography variant="h5">{item.title}</Typography>
              </Grid>
            </Link>
          ))
        }
      </Grid>
    </FooterStyle>
  );
};
