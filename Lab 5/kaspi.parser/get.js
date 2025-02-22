import axios from 'axios';
import fs from 'fs';

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};

const urls = [
    'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
    'https://kaspi.kz/shop/p/now-omega-3-1000-mg-omega-3-kapsuly-100-sht-107545548/?c=750000000',
    'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
    'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
    
];


async function fetchData(url) {
    try {
        const response = await axios.get(url, { headers });
        return response.data; 
    } catch (error) {
        console.error(`Ошибка запроса для ${url}:`, error.message);
        return null;
    }
}

function extractJson(html) {
    const match = html.match(/window\.digitalData\.product\s*=\s*({.*?});/s);
    if (!match) return null;

    try {
        let data = JSON.parse(match[1]); 
        return {
            id: data.id || null,
            name: data.name || null,
            category: data.category || null,
            brand: data.brand || null,
            primaryImage : data.primaryImage || null,
        }
    } catch (error) {
        console.error("Ошибка парсинга JSON:", error);
        return null;
    }
}

function extractData(html) {
    return {
        //title: html.match(/<meta property="og:title" content="(.*?)"/)?.[1] || null,
        price: html.match(/<meta property="product:price:amount" content="(.*?)"/)?.[1] || null,
        currency: html.match(/<meta property="product:price:currency" content="(.*?)"/)?.[1] || null,
        //availability: html.match(/<meta property="product:availability" content="(.*?)"/)?.[1] || null,
        //productId: html.match(/<meta property="product:retailer_item_id" content="(.*?)"/)?.[1] || null,
        imageUrl: html.match(/<meta property="og:image" content="(.*?)"/)?.[1] || null,
        url: html.match(/<meta property="og:url" content="(.*?)"/)?.[1] || null,
        description: html.match(/<div class="description">(.*?)<\/div>/s)?.[1]?.replace(/<[^>]*>/g, '').trim() || null
    };
}


async function fetchAll(urls) {
    const results = [];

    for (const url of urls) {
        console.log(`🔍 Обрабатываем: ${url}`);
        const html = await fetchData(url);
        if (!html) continue;

        const metaData = extractData(html);
        const productData = extractJson(html);

        const fullData = { ...metaData, ...productData };

        results.push(fullData);
    }

    return results;
}

let product = await fetchAll(urls)

const jsonString = JSON.stringify(product, null, 2);

fs.writeFileSync('data.json', jsonString, 'utf8');

console.log("✅ Данные успешно записаны в data.json");