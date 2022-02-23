from app import db

class orders(db.Model):
    __tablename__='orders_'

    id=db.Column(db.Integer,primary_key=True)
    id_prod_rel=db.relationship('orders_')
    # todo -- agregar name_prod_foreign =String(100)
    #? nombres de todos los productos del pedido
    name_prod_rel=db.relationship('orders_')
    adres_id=db.Column(db.Integer)
    user_phone_number=db.Column(db.String(20))
    delivery_date=db.Column(db.String)
""" CREATE TABLE public.Orders
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    adres_id integer NOT NULL,
    user_phone_number character varying(20) NOT NULL,
    delivery_date date NOT NULL,
    PRIMARY KEY (id)

"""

class products(db.Model):
    __tablename__='products_'

    id=db.Column(db.Integer, primary_key=True)
    id_rel=db.Column(db.Integer, db.ForeignKey('orderDestails_.id', 'orders_.id_prod_rel'))
    name=db.Column(db.String(100))
    name_rel=db.Column(db.String(100), db.ForeignKey('orderDestails_.name_prod', 'orders_.name_prod_rel'))
    presentation=db.Column(db.String)
    description=db.Column(db.String)
    posologiy=db.Column(db.String)
    management=db.Column(db.String)
    stock_code=db.Column(db.String(100))
    stock_code_foreign=db.Column(db.String(100), db.ForeignKey('inventory_.inventary'))
    category_id=db.Column(db.Integer)
    inventory_id=db.Column(db.Integer)
    price=db.Column(db.Integer)
    discount_id=db.Column(db.Integer)
""" CREATE TABLE public.Products
(
    id integer NOT NULL,
    name character varying(100) NOT NULL,
	presentation text NOT NULL,
    description text NOT NULL,
	posologiy text NOT NULL,
	management text NOT NULL,
    stock_code character varying(13) NOT NULL,
    category_id integer NOT NULL,
    inventory_id integer NOT NULL,
    price double precision NOT NULL,
    discount_id integer NOT NULL,
    PRIMARY KEY (id)
); """

class users(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    user_name=db.Column(db.String(50))
    password=db.Column(db.String(50))
    first_name=db.Column(db.String(50))
    last_name=db.Column(db.String(50))
    phone_number=db.Column(db.String(25))
    email=db.Column(db.String(255))
"""Comprobar CREATE TABLE public.Users
(
    id integer NOT NULL,
    user_name character varying(15) NOT NULL,
    password character varying(25) NOT NULL,
    first_name character varying(15) NOT NULL,
    last_name character varying(15) NOT NULL,
    phone_number character varying(20) NOT NULL,
	email character varying(30) NOT NULL,
    PRIMARY KEY (id)
); """

class discount(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    discount=db.Column(db.Integer)
"""     CREATE TABLE public.discount
(
    id integer NOT NULL,
    discount double precision NOT NULL,
    PRIMARY KEY (id)
); """

class inventory(db.Model):
    __tablename__='inventory_'

    id=db.Column(db.Integer,primary_key=True)
    quantity=db.Column(db.Integer)
    quantity_foreign=db.Column(db.Integer, db.ForeignKey('orderDestails_.quantity'))
    inventary=db.relationship('products_')
""" CREATE TABLE public.inventory
    id integer NOT NULL,
    quantity integer NOT NULL,
    PRIMARY KEY (id)
); """

class orderDestails(db.Model):
    __tablename__='orderDestails_'

    id=db.Column(db.Integer,primary_key=True)
    quantity=db.Column(db.Integer)
    #?  id de todos los productos del pedido
    id_foreign=db.Column(db.Integer, db.ForeignKey('products_.id'))
    #? nombres de todos los productos del pedido
     # todo -- agregar name_prod =String(100)
    name_prod=db.Column(db.String(100))
    name_prod_foreign=db.Column(db.String(100), db.ForeignKey('products_.name_prod'))
    # ?cantidad de productos en el pedido
    quantity_rel=db.relationship('inventory_')
""" CREATE TABLE public.order_destails
(
    id integer NOT NULL,
    product_id integer NOT NULL,
	quantity integer NOT NULL,
    PRIMARY KEY (id)
); """

class productCategory(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100))
    description=db.Column(db.String(250))
""" comprobar CREATE TABLE public.product_category
(
    id integer NOT NULL,
    name character varying(100),
    description character varying(250),
    PRIMARY KEY (id)
); """

class userAddress(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    user_id=db.Column(db.Integer)
    adres_line1=db.Column(db.String(120))
    adres_line2=db.Column(db.String(50))
    zipcode=db.Column(db.String(1))
    country=db.Column(db.String)
    phone=db.Column(db.Integer)
    email=db.Column(db.String)


""" comprobar CREATE TABLE public.user_address
(
    id integer NOT NULL,
    user_id integer NOT NULL,
    adres_line1 character varying(120) NOT NULL,
    adres_line2 character varying(50) NOT NULL,
    zipcode char NOT NULL,
    country name NOT NULL,
    phone integer NOT NULL,
	email integer NOT NULL,
    PRIMARY KEY (id)
); """

class userPayment(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    user_id=db.Column(db.Integer)
    payment_type=db.Column(db.String(100))
    provider=db.Column(db.String(100))
    account_no=db.Column(db.String(100))
    payment_date=db.Column(db.String(240))
    # payment_detail=db.Column(db.Integer)
""" CREATE TABLE public.user_payment
(
    id integer NOT NULL,
    user_id integer NOT NULL,
    payment_type character varying(100) NOT NULL,
    provider character varying(100) NOT NULL,
    account_no character varying(100) NOT NULL,
    payment_date date NOT NULL,
    payment_detail character varying
PRIMARY KEY (id)
); """



