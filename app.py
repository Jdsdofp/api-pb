from flask import Flask, jsonify
from model import col_registros
from bson import ObjectId

app = Flask(__name__)

# Rota para listar todos os documentos sem autenticação
@app.route('/', methods=['GET'])
def get_all():
    data = [serialize_doc(doc) for doc in col_registros.find()]

    response = jsonify({'registros': data})
    return response

# Função para serializar documentos MongoDB
def serialize_doc(doc):
    # Converta o ObjectId para str
    doc['_id'] = str(doc['_id'])
    # Adicione outras conversões de tipos conforme necessário

    return doc


if __name__ == '__main__':
    app.run()
