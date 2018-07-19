import { TestWindow } from '@stencil/core/dist/testing';
import { RerumManifesto } from './rerum-manifesto';

describe('rerum-manifesto', () => {
  it('should build', () => {
    expect(new RerumManifesto()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRerumManifestoElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RerumManifesto],
        html: '<rerum-manifesto></rerum-manifesto>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });

    it('should work with a url', async () => {
      element.manifest = 'http://wellcomelibrary.org/iiif/b18035723/manifest';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m http://wellcomelibrary.org/iiif/b18035723/manifest');
    });

    // it('should work with a last name', async () => {
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    // });

    // it('should work with both a first and a last name', async () => {
    //   element.first = 'Peter';
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    // });
  });
});
