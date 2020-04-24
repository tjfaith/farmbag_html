<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\product;
use App\product_category;
class productController extends Controller
{
    public function index(){
        // return response()->json([

           return product::latest()->get();

        // ], Response::HTTP_OK);
    }

    public function product_category(){
        return product_category::orderBy('category_name','asc')->get();
    }
}
