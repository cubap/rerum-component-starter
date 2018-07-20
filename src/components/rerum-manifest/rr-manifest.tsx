import { Component, Prop, Event, EventEmitter, Listen, State } from '@stencil/core';
import { EventEmitterData } from '@stencil/core/dist/declarations';

@Component({
  tag: 'rr-manifesto',
  styleUrl: 'rr-manifesto.css',
  shadow: true
})
export class RerumManifest {

  // @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop() manifestUrl: string;

  @Event() loadedManifest: EventEmitter;
  @Listen('loadedManifest')
  loadedManifestHandler(ev: EventEmitterData){
    const m = manifesto.create(ev.detail);
    this.viewManifest(m);
  }

  @State() currentManifest: Manifesto.IIIIFResource | null;
    viewManifest(m: Manifesto.IIIIFResource | null) {
      this.currentManifest = m;
    }

  @State() manifestLoadState = "No URI present";

  render() {
    return (
      <div>
        Here is {this.manifestUrl}
        <strong>
          {this.currentManifest ? this.currentManifest.getLabel()[0].value : this.manifestLoadState}
        </strong>
        <img src={this.currentManifest.getLogo()}></img>
        <iiif-gallery></iiif-gallery>
      </div>
    );
  }
  componentDidLoad() {
    // Dummy:
    const url = this.manifestUrl || "http://wellcomelibrary.org/iiif/b18035723/manifest";

    // TODO: incorporate Manifesto... the initial attempt failed typescript importing.
//    if (this.isServer === false) {
      const scr = document.createElement("script");
      let comp = this;
      scr.onload = function(){
        manifesto.loadManifest(url).then((data) => {
          // comp.viewManifest(manifesto.create(data));
          comp.manifestLoadState = "Finished loading.";
          comp.loadedManifest.emit(data);
      });
      };
        scr.setAttribute("src", "https://unpkg.com/manifesto.js/dist/client/manifesto.bundle.js");
        document.head.appendChild(scr);
        comp.manifestLoadState = "Loading manifest at " + comp.manifestUrl + "...";
//    }
  }
}
