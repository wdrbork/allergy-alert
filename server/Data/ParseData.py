import pandas as pd
import json

path = "server\Data\RecipeNLG_dataset.csv"
df = pd.read_csv(path)
df.drop(['ingredients', 'directions', 'link', 'source'], axis=1)

#Change the number here for how many recipe you want (IE [0:10000] is 10000 recipes)
df = df[0:10000]

dct = {}
for index, row in df.iterrows():
  if row['title'] not in dct:
    dct[row['title']] = {}

  string = row['NER'].replace("[","")
  string = string.replace("]","")
  string = string.replace('"',"")
  array = string.split(", ")

  for ingred in array:
    if ingred not in dct[row['title']]:
      dct[row['title']][ingred] = 1
    else:
      dct[row['title']][ingred] += 1

      dict = {}
for index, row in df.iterrows():
  if row['title'] in dict:
    dict[row['title']] += 1
  else:
    dict[row['title']] = 1

for keys in dict:
  dct[keys]['Total'] = dict[keys]
  dct[keys]['Name'] = keys

finalData = []
for keys in dict:
  finalData.append(dct[keys])




with open("10000Recipe.json", "w") as final:
   json.dump(finalData, final)