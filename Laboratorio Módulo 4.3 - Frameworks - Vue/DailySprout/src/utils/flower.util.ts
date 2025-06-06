const flowerPngFactory = (count = 15, basePath = '/flowers') =>
  Array.from({ length: count }, (_, i) => `${basePath}/flower${i}.png`)

export const flowers = flowerPngFactory()
