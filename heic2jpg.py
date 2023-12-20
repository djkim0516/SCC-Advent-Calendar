#%%
from PIL import Image
import pillow_heif
import os, glob

photo_list = glob.glob('image/Photos/*.heic')

#%%

for photo in photo_list:
    heif_file = pillow_heif.read_heif(f"{photo}")
    image = Image.frombytes(
        heif_file.mode,
        heif_file.size,
        heif_file.data,
        "raw",)

    image.save(f"{photo_list[0].split('.')[0] + '.png'}", format("png"))
# %%
