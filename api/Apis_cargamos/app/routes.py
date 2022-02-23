from flask import Flask,redirect,request,flash,make_response,jsonify
from app import app,db
from app.models import users,product_category,products
from flask_cors import cross_origin

@cross_origin
@app.route("/listar_producto",methods=["GET"])
def listar_producto():
    #todo seleccionado todos los objetos de la clase grupos
    products=products.query.all()
    #todo serializando y seleccionado los atributos a cast en json
    #todo dump nos permite serializar los objetos de PYTHON 
    """ result=products_.dump(products) """
    
    #todo creando el documento de salida
    data={
        'message':'Todas mis usuarios',
        'status':200,
        'data':{}
    }
    return make_response(jsonify(data))

