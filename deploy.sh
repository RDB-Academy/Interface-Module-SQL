#!/bin/bash

ember build --environment=production
cp -r dist interface-module-sql
zip interface-module-sql.zip interface-module-sql/*/**
rm -r interface-module-sql/
scp -r interface-module-sql.zip $1@sql.academy.ifis.cs.tu-bs.de:~/tmp
ssh $1@sql.academy.ifis.cs.tu-bs.de "unzip -o ~/tmp/interface-module-sql.zip -d ~/tmp/ && cp -r ~/tmp/interface-module-sql/* /var/www/sql/app/ && rm -r ~/tmp/interface-module-sql/"
