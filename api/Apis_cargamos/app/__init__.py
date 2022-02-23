from flask import Flask
from app.config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

# creando app
app=Flask(__name__)
cors=CORS(app)
app.secret_key = os.urandom(24)
app.config['CORS_HEADERS']='Content-Type'

# configurando la app con la BD
app.config.from_object(Config)
# conectando la app con la BD
db=SQLAlchemy(app)

# importar los que no tienen corexión directa
from app import models



