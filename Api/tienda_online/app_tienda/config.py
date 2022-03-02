#pip install psycopg2-binary
class Config(object):
    #todo conectand a la base de datos de POSTGRESS modificado el dialecto
    #todo conectado a la base de datos de MYSQL
    ##SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:@localhost/ecommerce_cargamos'
    #SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:rioazulq12@localhost:5432/YLiveWithUs'
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    #todo conectand a la base de datos de POSTGRESS modificado el dialecto
    #SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:rioazulq12@localhost:5432/bdcargamos'
    SQLALCHEMY_DATABASE_URI = 'postgresql://bmoltetxalybvi:fe85f624e1615c860bc96d7a10a697ba60510c4daea3b37b40d760699b800ec7@ec2-23-20-73-25.compute-1.amazonaws.com:5432/d7j9ifjvpp0ceu'
    #SQLALCHEMY_TRACK_MODIFICATIONS = True