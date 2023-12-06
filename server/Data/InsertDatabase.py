import json
from pymongo import MongoClient


cluster = MongoClient("Put DBString here")
db = cluster["allergy-alert"]
collection = db['test']

f = open('server\Data\10000Recipe.json')
data = json.load(f)
collection.insert_many(data)
