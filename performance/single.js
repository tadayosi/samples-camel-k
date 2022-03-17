// camel-k: language=js dependency=camel:timer trait=jolokia.enabled=true trait=jolokia.protocol=https

from(`timer:js?repeatCount=1`)
  .routeId('js')
  .setBody().simple('Hello Camel K from ${routeId}')
  .log('${body}')
