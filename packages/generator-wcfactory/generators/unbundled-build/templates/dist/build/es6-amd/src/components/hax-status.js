define(["../../node_modules/lit-element/lit-element.js"],(function(_litElement){class HaxStatus extends _litElement.LitElement{static get properties(){return{status:{type:String},_clock:{type:String}}}constructor(){super(),this.status="loading";let clock=1;setInterval(()=>{1===clock&&(this._clock="🕛"),2===clock&&(this._clock="🕒"),3===clock&&(this._clock="🕕"),4===clock&&(this._clock="🕘"),clock=4===clock?1:++clock,console.log(clock)},500),fetch("https://haxtheweb.org").then(res=>{200===res.status?this.status="up":this.status="down"}).catch(()=>{this.status="down"})}render(){return _litElement.html`
      ${"loading"===this.status?_litElement.html`${this._clock}`:""}
      ${"up"===this.status?_litElement.html`HAXtheWeb.org is up! 😁`:""}
      ${"down"===this.status?_litElement.html`HAXtheWeb.org is down 😦`:""}
    `}}customElements.define("hax-status",HaxStatus)}));