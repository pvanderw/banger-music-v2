# pull official base image
FROM python:3.6-alpine

# set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# set work directory
WORKDIR /usr/src/banger_music/backend

# install psycopg2
RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql-dev \
    && pip install psycopg2 \
    && apk del build-deps

# install dependencies
RUN pip install --upgrade pip
RUN pip install pipenv
COPY ./Pipfile /usr/src/banger_music/backend/Pipfile
RUN pipenv install --skip-lock --system --dev

# copy entrypoint.sh
COPY ./entrypoint.sh /usr/src/banger_music/backend/entrypoint.sh

# copy project
COPY . /usr/src/banger_music/backend/

# run entrypoint.sh
ENTRYPOINT ["/usr/src/banger_music/backend/entrypoint.sh"]