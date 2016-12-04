import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }        from './app.component';
import { ProductsPage } from '../pages/products/products';
import { ApiProvider }  from '../providers/api-provider';

@NgModule({
  declarations: [
    MyApp,
    ProductsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductsPage
  ],
  providers: [ApiProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
