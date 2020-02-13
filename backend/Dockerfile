# pull official base image
FROM python:3.8-alpine

# set work directory
WORKDIR /usr/src/banger_music/backend

# set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

RUN apk add --no-cache git

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/banger_music/backend/requirements.txt
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh /usr/src/banger_music/backend/entrypoint.sh

# copy project
COPY . /usr/src/banger_music/backend/

# run entrypoint.sh
ENTRYPOINT ["/usr/src/banger_music/backend/entrypoint.sh"]