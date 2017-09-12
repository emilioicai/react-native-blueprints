export const get = uri =>
  new Promise(resolve => {
    let response;

    switch (uri) {
      case '/products':
        response = [
          {
            id: 1,
            name: 'Mastering Docker - Second Edition',
            img:
              'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B06565_MockupCover_0.png',
            price: 39.58,
          },
          {
            id: 2,
            name: 'Go Cookbook',
            img:
              'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B02767_cover.png',
            price: 35.98,
          },
          {
            id: 3,
            name: 'Build incredible chatbots',
            img:
              'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/bookretailers/V08833.png',
            price: 99.58,
          },
        ];
        break;
      default:
        return null;
    }

    setTimeout(() => resolve(response), 1000);
    return null;
  });

export const post = () => {};

export const put = () => {};