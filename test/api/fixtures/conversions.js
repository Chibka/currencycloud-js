var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id": "development@currencycloud.com",
    "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token": "1b57ba7d398f3df8b79e279001727b72"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "e204e1da-0ed2-4098-b1d2-9a67f531ab32",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-CMCRZC",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_status": "funds_arrived",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:13+00:00",
    "updated_at": "2017-10-27T19:53:14+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "d789e1da-0ed2-4098-b1d2-9a67f531ab32",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-CMCRZC",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_status": "funds_arrived",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:13+00:00",
    "updated_at": "2017-10-27T19:53:14+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/conversions/d789e1da-0ed2-4098-b1d2-9a67f531ab32')
  .reply(200, {
    "id": "d789e1da-0ed2-4098-b1d2-9a67f531ab32",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-CMCRZC",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_status": "funds_arrived",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:13+00:00",
    "updated_at": "2017-10-27T19:53:14+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-ZMNZZB",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_status": "funds_arrived",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:17+00:00",
    "updated_at": "2017-10-27T19:53:17+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/conversions/find')
  .query({"conversion_ids": "5c4716dc-42dd-4571-b4bf-0aa299fff928"})
  .reply(200, {
    "conversions": [{
      "id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
      "settlement_date": "2017-10-29T14:00:00+00:00",
      "conversion_date": "2017-10-29T00:00:00+00:00",
      "short_reference": "20171027-ZMNZZB",
      "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
      "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
      "currency_pair": "EURGBP",
      "status": "awaiting_funds",
      "buy_currency": "EUR",
      "sell_currency": "GBP",
      "client_buy_amount": "10000.23",
      "client_sell_amount": "7215.17",
      "fixed_side": "buy",
      "mid_market_rate": "0.7216",
      "core_rate": "0.7215",
      "partner_rate": "",
      "partner_status": "funds_arrived",
      "partner_buy_amount": "0.00",
      "partner_sell_amount": "0.00",
      "client_rate": "0.7215",
      "deposit_required": false,
      "deposit_amount": "0.00",
      "deposit_currency": "",
      "deposit_status": "not_required",
      "deposit_required_at": "",
      "payment_ids": [],
      "created_at": "2017-10-27T19:53:17+00:00",
      "updated_at": "2017-10-27T19:53:17+00:00"
    }],
    "pagination": {
      "total_entries": 1,
      "total_pages": 1,
      "current_page": 1,
      "per_page": 25,
      "previous_page": -1,
      "next_page": -1,
      "order": "created_at",
      "order_asc_desc": "asc"
    }
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"d789e1da-0ed2-4098-b1d2-9a67f531ab32","settlement_date":"2015-10-29T14:00:00+00:00","conversion_date":"2015-10-29T00:00:00+00:00","short_reference":"20151027-CMCRZC","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-27T19:53:13+00:00","updated_at":"2015-10-27T19:53:14+00:00"}, { server: 'nginx',
    vary: 'Origin',
    'content-type': 'application/json;charset=utf-8',
    date: 'Tue, 27 Oct 2015 19:53:14 GMT',
    'x-request-id': '2906350397126604774',
    'x-content-type-options': 'nosniff',
    connection: 'close',
    'content-length': '866' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/d789e1da-0ed2-4098-b1d2-9a67f531ab32/cancel')
  .reply(200, {"account_id":"78618e58-da3c-447f-ad59-1796accfeff9","contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","conversion_id":"d789e1da-0ed2-4098-b1d2-9a67f531ab32","amount":"-0.28","currency":"EUR","notes":"Some note","event_date_time":"2017-11-10T12:18:56+00:00"}, { server: 'nginx',
    vary: 'Origin',
    'content-type': 'application/json;charset=utf-8',
    date: 'Sun, 01 Nov 2015 20:23:36 GMT',
    'x-request-id': '2909989562150011054',
    'x-content-type-options': 'nosniff',
    connection: 'close',
    'content-length': '260' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
