#! /bin/bash

source ~/.bashrc

path=$(realpath $(dirname $0)/..)
mysql_params="-h mysql -u root -pmysql --default-character-set=utf8mb4"
db_name="TheMovieDB"

read -p "Are you sure to destroy $db_name database? (yes/no) " DESTROY

if [ "$DESTROY" != "yes" ]; then
   exit
fi

$path/bin/console doctrine:database:drop --force
$path/bin/console doctrine:database:create
$path/bin/console doctrine:schema:create --no-interaction

echo "Loading dump..."
echo 'export PATH="$HOME/.symfony5/bin:$PATH"' >> ~/.bashrc
cat $path/sql/dump.sql | mysql $mysql_params $db_name

exit 0
