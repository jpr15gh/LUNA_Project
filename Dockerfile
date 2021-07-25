FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install wget -y

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs && apt-get install -y npm

RUN mkdir -p /backend

RUN mkdir -p /scripts

RUN mkdir -p /frontend_tmp

RUN mkdir -p /frontend

COPY ./backend/requirements.yml /backend/requirements.yml

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml

ENV PATH /opt/conda/envs/luna_backend/bin:$PATH

RUN echo "source activate luna_backend" >~/.bashrc

COPY ./backend /backend

COPY ./scripts /scripts

RUN chmod +x /scripts*

WORKDIR /frontend_tmp

COPY ./frontend/package.json /frontend_tmp/

RUN npm install

COPY ./frontend /frontend_tmp

RUN npm run build

WORKDIR /backend