// language: JavaScript, file: locket_date.js
// Chèn ngày tháng vào Remote Config, chạy sau locketfix.js

var obj = {};
try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

if (!obj || typeof obj !== "object") {
    obj = {};
}

if (obj.entries && typeof obj.entries === "object") {
    var MEMBER_SINCE = "28/02/2026";
    
    // Ép ngày tháng vào tất cả các key có thể
    obj.entries.member_since = MEMBER_SINCE;
    obj.entries.locket_member_since = MEMBER_SINCE;
    obj.entries.locket_gold_since = MEMBER_SINCE;
    obj.entries.gold_since = MEMBER_SINCE;
    obj.entries.goldSince = MEMBER_SINCE;
    obj.entries.gold_since_badge = MEMBER_SINCE;
    obj.entries.goldSinceBadge = MEMBER_SINCE;
    obj.entries.profile_badge_since = MEMBER_SINCE;
    
    // Bật các key hiển thị huy hiệu
    obj.entries.profile_badge_visible = "true";
    obj.entries.show_gold_badge = "true";
    obj.entries.gold_badge_profile_menu = "enabled";
    obj.entries.show_gold_badge_setting = "true";
    obj.entries.allow_gold_badge_toggle = "true";
    obj.entries.gold_badge_enabled = "true";
    obj.entries.gold_badge_switch_enabled = "true";
    obj.entries.is_gold_badge_enabled = "true";
    obj.entries.enable_gold_badge_toggle = "true";
}

$done({ body: JSON.stringify(obj) });
