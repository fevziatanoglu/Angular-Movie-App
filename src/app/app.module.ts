import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Top10SliderComponent } from './components/top10-slider/top10-slider.component';
import { Top10CategoriesComponent } from './components/categories/top10-categories.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { MovieSearchItemComponent } from './components/movie-search-item/movie-search-item.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieSliderItemComponent } from './components/movie-slider-item/movie-slider-item.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
    FooterComponent,
    Top10SliderComponent,
    Top10CategoriesComponent,
    WatchlistComponent,
    MovieSearchItemComponent,
    MovieListItemComponent,
    MovieSliderItemComponent,
    HeaderComponent,
    LoadingScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
