import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }        from './app.component';
import { ProductsPage } from '../pages/products/products';
import { CartPage }     from '../pages/cart/cart';
import { ApiProvider }  from '../providers/api-provider';
import { SelectedProductsProvider } from '../providers/selected-products-provider';

@NgModule({
  declarations: [
    MyApp,
    ProductsPage,
    CartPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductsPage,
    CartPage
  ],
  providers: [ApiProvider, SelectedProductsProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
