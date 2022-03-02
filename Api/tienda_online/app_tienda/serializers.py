from app_tienda import app

from app_tienda.models import products
from flask_marshmallow import Marshmallow

ma=Marshmallow(app)


class ProductosSerializer(ma.SQLAlchemyAutoSchema):
    class Meta:
        model=products
        fields=('id','name','price','product_pict')
        
producto_schema=ProductosSerializer()
productos_schema=ProductosSerializer(many=True)  
