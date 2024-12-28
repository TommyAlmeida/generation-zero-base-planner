shopt -s nullglob
for file in *_Item.webp; do
  convert "$file" "${file%.webp}.png" && rm "$file"
done
