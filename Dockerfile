FROM node:0.12.4
MAINTAINER Jon Dotsoy <hi@jon.soy> (http://jon.soy/)

# Create a ET35 user
RUN /usr/sbin/useradd --create-home --home-dir /ET35 --shell /bin/bash et35
RUN /usr/sbin/adduser et35 sudo
RUN chown -R et35 /usr/local/
RUN chown -R et35 /usr/lib/
RUN chown -R et35 /usr/bin/
RUN chown -R et35 /ET35
USER et35

WORKDIR /ET35

# Update NPM
RUN echo "Update NPM v2.11.3" && npm -g install npm@2.11.3

# Install SAILS
RUN echo "Install Sails v0.11.0" && npm -g install sails@0.11.0

# Install Bower
RUN echo "Install Bower v1.4.1" && npm -g install bower@1.4.1

# Create a folder to modules nodes
RUN mkdir /tmp/tem_install

# INSTALL DEPENDENCES BOWER
ADD bower.json /tmp/tem_install/bower.json
RUN cd /tmp/tem_install && bower install --allow-root
RUN mv /tmp/tem_install/bower_components/ /ET35

# INSTALL DEPENDENCES NODE
ADD package.json /tmp/tem_install/package.json
RUN cd /tmp/tem_install && npm install
RUN mv /tmp/tem_install/node_modules/ /ET35

EXPOSE 80

ENV PORT 80
ENV NODE_ENV production

VOLUME ["/ET35", "/ET35/api", "/ET35/config", "/ET35/assets" "/ET35/views"]

ADD . /ET35

CMD ["node", "app.js"]
