FROM node:16.20.2

ARG PROJECT_ID
ARG RELAY_URL
ARG TEST_NET
ARG LISK_SERVICE_URL
ARG DEX_SERVICE_URL
ARG WS_URL

ENV PROJECT_ID=$PROJECT_ID
ENV RELAY_URL=$RELAY_URL
ENV TEST_NET=$TEST_NET
ENV LISK_SERVICE_URL=$LISK_SERVICE_URL
ENV DEX_SERVICE_URL=$DEX_SERVICE_URL
ENV WS_URL=$WS_URL

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the default Next.js port (3000)
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
