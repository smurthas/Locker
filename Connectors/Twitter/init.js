// this is a common pattern many connectors use, it processes the startup data and eventfully loads the auth.js, sync-api.js, etc
require('connector/client').init({"enableCookies" : true, "id" : "id_str"});
