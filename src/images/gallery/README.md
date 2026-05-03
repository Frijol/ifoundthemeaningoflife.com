# Gallery Images

Add images to the following folders and import them into `src/pages/index.js`:

## Folder Structure

- **blog/** - Hero images for blog post cards (optional, quotes don't need images)
- **shop/** - Product images for shop items 
- **art/** - Images for art pieces

## How to Use

1. Add your image file to the appropriate folder (e.g., `chopping-wood.jpg` → `shop/`)
2. Import it in `src/pages/index.js`:
   ```javascript
   import choppingWoodImage from "../images/gallery/shop/chopping-wood.jpg"
   ```
3. Add the import path to the `galleryItems` array:
   ```javascript
   {
     type: "shop",
     title: "Chopping Wood",
     image: choppingWoodImage,
     url: "https://www.etsy.com/listing/...",
   }
   ```

## Image Requirements

- Format: JPG, PNG, or WebP
- Recommend: 900px wide or larger (will be displayed at 100% width, up to 860px max)
- Height: Images crop to 260px on display
