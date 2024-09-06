![Lisk DEX: UI](docs/assets/banner_ui.png "Lisk DEX: UI")

# Lisk DEX: UI

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/liskhq/lisk-dex-ui)
![GitHub repo size](https://img.shields.io/github/repo-size/liskhq/lisk-dex-ui)
[![DeepScan grade](https://deepscan.io/api/teams/19600/projects/23054/branches/712227/badge/grade.svg?token=a1fa0980263b30233c0ddf1e9c3ed778290db2ee)](https://deepscan.io/dashboard#view=project&tid=19600&pid=23054&bid=712227)
![GitHub issues](https://img.shields.io/github/issues-raw/liskhq/lisk-dex-ui)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/liskhq/lisk-dex-ui)

Lisk DEX: UI is a frontend user-interface for the [Lisk DEX: Core](https://github.com/LiskHQ/lisk-dex-core?tab=readme-ov-file#index) blockchain application. The project is developed using the [Next.js](https://nextjs.org/) framework and uses [WalletConnect](https://walletconnect.com/) as a remote signing protocol.

## Project Index

Below is an index of the repositories which relate to this repository for easy navigation:

|     | Repository                                                                               | Description                                             |
| --- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     | [Lisk DEX: Specs](https://github.com/LiskHQ/lisk-dex-specs?tab=readme-ov-file#index)     | The Lisk DEX blockchain specifications.                 |
|     | [Lisk DEX: Core](https://github.com/LiskHQ/lisk-dex-core?tab=readme-ov-file#index)       | The Lisk DEX blockchain application.                    |
|     | [Lisk DEX: Service](https://github.com/LiskHQ/lisk-dex-service?tab=readme-ov-file#index) | The Lisk DEX blockchain middleware between Core and UI. |
| X   | [Lisk DEX: UI](https://github.com/LiskHQ/lisk-dex-ui?tab=readme-ov-file#index)           | The Lisk DEX blockchain user-interface.                 |

## Installation

### From Source

1. Clone the repository and change into the application directory:

```bash
git clone https://github.com/LiskHQ/lisk-dex-ui.git
cd lisk-dex-ui
```

2. Install [Node Version Manager](https://github.com/nvm-sh/nvm) and the required version of Node.js:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install
```

2. Create an `.env.local` file and set the application environment variables:

```bash
NEXT_PUBLIC_PROJECT_ID=1234567890 # wallet project id
NEXT_PUBLIC_RELAY_URL=wss://relay.walletconnect.com # wallet connect websocket url 
NEXT_PUBLIC_TEST_NET=testnet # network name
NEXT_PUBLIC_LISK_SERVICE_URL=https://testnet-service.lisk.com # lisk service https url
NEXT_PUBLIC_DEX_SERVICE_URL=https://testnet-dex-service.lisk.com # lisk (dex) service https url
NEXT_PUBLIC_DEX_SERVICE_WS_URL=wss://testnet-dex-service.lisk.com # lisk (dex) service websocket url 
```

3. Install the node modules (using yarn):

```
npm i -g yarn
yarn install --frozen-lockfile
```

4. Build the Next.js application:

```
yarn build
```

5. Start the Next.js application:

```
yarn start
```

Once the application process has started, the user-interface can be accessed locally at: [http://localhost:3000/](http://localhost:3000/).

To stop the application process, press the key combination:

```
CTRL+C
```

### With Docker

1. Install [Docker](https://www.docker.com/) with [Docker compose](https://docs.docker.com/compose/install/).

2. Clone the repository and change into the application directory:

```bash
git clone https://github.com/LiskHQ/lisk-dex-ui.git
cd lisk-dex-ui
```

3. Start the application container:

```bash
docker-compose up
```

Once the application container is started, the user-interface can be accessed locally at: [http://localhost:3000/](http://localhost:3000/).

To stop the application container, press the key combination:

```
CTRL+C
```

## Tests

Assuming the Next.js application is already built from source.

To run the tests, execute the following command:

```bash
yarn test
```

## Contributors

https://github.com/LiskHQ/lisk-dex-ui/graphs/contributors

## Disclaimer

> [!WARNING]
> The source code of Lisk DEX: UI is considered to be a pre-release beta version that is subject to missing or incomplete features, bugs, and potential security flaws, and is therefore not suitable for usage in a production environment such as the Lisk Mainnet.
>
> By using the source code of Lisk DEX: UI, you acknowledge and agree that you have an adequate understanding of the risks associated with the use of the source code of Lisk DEX: UI and that it is provided on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. To the fullest extent permitted by law, in no event shall the Lisk Foundation or other parties involved in the development of Lisk DEX: UI have any liability whatsoever to any person for any direct or indirect loss, liability, cost, claim, expense or damage of any kind, whether in contract or in tort, including negligence, or otherwise, arising out of or related to the use of all or part of the source code of Lisk DEX: UI.

## License

Copyright 2016-2024 Lisk Foundation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
