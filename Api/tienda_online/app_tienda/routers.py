from flask import request,make_response,jsonify
from app_tienda import app,db
from app_tienda.models import products
from app_tienda.serializers import producto_schema,productos_schema
from flask_cors import cross_origin

@cross_origin
@app.route("/api/get_all_products",methods=["GET"])
def get_all_products():
    #todo seleccionado todos los objetos de la clase grupos
    products_all=products.query.all()
    #todo serializando y seleccionado los atributos a cast en json
    #todo dump nos permite serializar los objetos de PYTHON 
    result=productos_schema.dump(products_all)
    #todo creando el documento de salida
    data={
        'message':'Ok All Products',
        'status':200,
        'data':result
    }
    return make_response(jsonify(data))

@cross_origin
@app.route("/api/get_all_products/<category>",methods=["GET"])
def get_all_products_cat(category):
    #todo seleccionado todos los objetos de la clase grupos
    products_a=products.query.filter_by(category_id=category)
    #todo serializando y seleccionado los atributos a cast en json
    #todo dump nos permite serializar los objetos de PYTHON 
    result=productos_schema.dump(products_a)
    #todo creando el documento de salida
    if result:
            data={
            'message':'Ok All Products {}'.format(category),
            'status':200,
            'data':result
        }
    else:        
        data ={
            'message':'No se encontro la categoria',
            'status':400
            
    }
    return make_response(jsonify(data))