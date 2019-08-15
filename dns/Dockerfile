FROM mastermindg/rpi-dns:latest 

ENV TZ=Europe/Warsaw
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN echo "deb http://legacy.raspbian.org/raspbian wheezy main contrib non-free\ndeb-src http://legacy.raspbian.org/raspbian wheezy main contrib non-free" > /etc/apt/sources.list

RUN apt-get update && apt-get install --reinstall -y locales && sed -i 's/# pl_PL.UTF-8 UTF-8/pl_PL.UTF-8 UTF-8/' /etc/locale.gen && locale-gen pl_PL.UTF-8

# set system-wide locale settings
ENV LANG pl_PL.UTF-8
ENV LANGUAGE pl_PL
ENV LC_ALL pl_PL.UTF-8

# verify modified configuration
RUN dpkg-reconfigure --frontend noninteractive locales
