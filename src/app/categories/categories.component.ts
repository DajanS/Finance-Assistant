import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ICategory } from '../interfaces/icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories!: ICategory[];
  category!: String;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getCategories()
  }


  getCategories() {
    this.api.getCategories().subscribe((res: ICategory[]) => {
      this.categories = res
    })
  }

  newCategory() {
    const cat = {
      name: this.category,
      items: 0
    }
    this.api.addCategory(cat).subscribe((res) => {
      this.categories.push(res)
    })
  }

}
