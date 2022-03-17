// camel-k: language=js dependency=camel:timer trait=jolokia.enabled=true trait=jolokia.protocol=https

const size = 500

for (let i = 0; i < size; i++) {
  const s = ('000' + i).slice(-3)
  from(`timer:js${s}?repeatCount=1`)
    .routeId('js' + s)
    .setBody().simple('Hello Camel K from ${routeId}')
    .log('${body}')
}
