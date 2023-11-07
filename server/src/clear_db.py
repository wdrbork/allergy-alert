# Small file that deletes all entries in the database. Pls dont use

import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://wdrb2001:E1ArjPx52iukOs7U@cluster0.vdcfw8l.mongodb.net/?retryWrites=true&w=majority")
db = cluster["allergy-alert"]
collection = db['recipes']

results = collection.delete_many({})