// language: JavaScript, file: locket_sub.js
// Đánh lừa API RevenueCat rằng mày đã mua Gold vĩnh viễn

var obj = {};
try { obj = JSON.parse($response.body); } catch(e) { obj = {}; }

if (obj && obj.subscriber) {
    // Bơm entitlement Gold vĩnh viễn
    obj.subscriber.entitlements = {
        "locket_gold": {
            "expires_date": null,
            "product_identifier": "locket_gold_lifetime",
            "purchase_date": "2023-01-01T00:00:00Z"
        }
    };
    
    // Bơm subscription Gold vĩnh viễn
    obj.subscriber.subscriptions = {
        "locket_gold_lifetime": {
            "expires_date": null,
            "purchase_date": "2023-01-01T00:00:00Z",
            "store": "app_store"
        }
    };
}

$done({ body: JSON.stringify(obj) });
