// language: JavaScript, file: locket_sub.js
// Đánh lừa API RevenueCat rằng đã mua Gold vĩnh viễn

var obj = {};
try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

if (!obj || typeof obj !== "object") {
    obj = {};
}

if (obj.subscriber) {
    obj.subscriber.entitlements = {
        "locket_gold": {
            "expires_date": null,
            "product_identifier": "locket_gold_lifetime",
            "purchase_date": "2023-01-01T00:00:00Z"
        }
    };
    
    obj.subscriber.subscriptions = {
        "locket_gold_lifetime": {
            "expires_date": null,
            "purchase_date": "2023-01-01T00:00:00Z",
            "store": "app_store"
        }
    };
}

$done({ body: JSON.stringify(obj) });
