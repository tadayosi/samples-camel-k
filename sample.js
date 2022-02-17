vars = Object.getOwnPropertyNames(getContext())
console.log(vars)

log = getContext().getComponent("log")
log.exchangeFormatter = (e) => {
  "Body = " + e.in.body + ", Headers = " + e.in.headers
}

from("timer:sample?period=3s")
  .routeId("sample-js")
  .setBody().simple("Hello!")
  .to("log:info")
