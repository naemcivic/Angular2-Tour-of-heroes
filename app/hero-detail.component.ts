import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';
import { Hero } from './hero'

@Component({
    selector: "my-hero-detail",
    templateUrl: 'app/hero-detail.component.html',   
    styleUrls: ['app/hero-detail.components.css']   
})

export class HeroDetailComponent implements OnInit {
    heroes: Hero[];
    
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
        });
    }

    constructor (private heroService: HeroService,
                 private route: ActivatedRoute) {}
    
    goBack(): void {
        window.history.back();
    }
}
