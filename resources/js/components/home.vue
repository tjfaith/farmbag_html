<template>
     
       <div>
             <div class="carousel-caption scrollDown">
                   <i class="animated pulse fa fa-angle-double-down arrow-down" style="font-size:10vh"></i>
            </div>
            <div id="sliderImage" class="carousel slide carousel-animation bg-dark" data-ride="carousel">
                
                <div class="carousel-inner">
                    <div class="carousel-item active" style="background-image: url('/image/slider/img2.jpg')"> 
                            <div class="overlay">
                                    <div class="caption-text d-md-block">
                                        <h1 class="el1 animated bounceInDown">WELCOME TO FARMBAG</h1>
                                        <h3 class="el2 animated flipInY">GET ONLINE MEET EXPERTS AND PROMOTE YOUR BUSINESS</h3>
                                        <p class="el3 animated slideInUp">HERE ON OUR PLATFORM</p>
                                        <button class="el4 btn btn-success animated zoomInLeft">SIGN UP AND UPDATE </button>
                                    </div>
                            </div>

                    
                    </div>
                    <div class="carousel-item" style="background-image: url('/image/slider/img1.jpg')">
                     <div class="overlay">
                          <div class="caption-text d-md-block">
                                        <h1 class="el1 animated bounceInDown">ARE YOU A FARMER!</h1>
                                        <h3 class="el2 animated flipInY">PUSH YOUR PRODUCT TO THE NEXT LEVEL</h3>
                                        <p class="el3 animated slideInUp">IN JUST THREE STEPS</p>
                                        <button class="el4 btn btn-success animated zoomInLeft">SIGN UP AND UPDATE </button>
                                    </div>
                     </div>
                    </div>
                    <div class="carousel-item" style="background-image: url('/image/slider/img3.jpg')">
                     <div class="overlay">
                         <div class="caption-text d-md-block">
                                        <h1 class="el1 animated bounceInDown">GET INVLOLVED! JOIN!</h1>
                                        <h3 class="el2 animated flipInY">AGRICULTURAL EXPERTS AND PROFESSIONALS</h3>
                                        <p class="el3 animated slideInUp">WITH A CLICK AWAY</p>
                                        <button class="el4 btn btn-success animated zoomInLeft">GET IN</button>
                                    </div>
                     </div>
                    
                    </div>
                            <div class="carousel-item" style="background-image: url('/image/slider/img4.jpg')">
                     <div class="overlay">
                         <div class="caption-text d-md-block">
                                        <h1 class="el1 animated bounceInDown">GET INVLOLVED! JOIN!</h1>
                                        <h3 class="el2 animated flipInY">AGRICULTURAL EXPERTS AND PROFESSIONALS</h3>
                                        <p class="el3 animated slideInUp">WITH A CLICK AWAY</p>
                                        <button class="el4 btn btn-success animated zoomInLeft">GET IN</button>
                                    </div>
                     </div>
                    
                    </div>
                </div>
                
            </div>
         <div class="main">
             
            <div class="page">
                <div class="container">
                <div class="row">

                        <div class="col-md-4 mb-4 d-flex justify-content-center">
                            <a href="#" style="text-decoration:none">
                           <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="/image/farm-product.png" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">UPLOAD PICTURS OF FARM PRODUCTS</h5>
                                </div>
                        </div>
                        </a>
                        </div>
                        <div class="col-md-4 mb-4 d-flex justify-content-center">
                            <a href="#" style="text-decoration:none">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="/image/tata-chemicals-eyes-fmcg-agro-business.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">JOIN AN AGROBUSINESS</h5>
                                </div>
                        </div>
                        </a>
                        </div>
                        <div class="col-md-4 mb-4 d-flex justify-content-center">
                            <a href="#" style="text-decoration:none">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="/image/two-young-farmers-shake-hands-background-soil-spring_78774-21.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">FARMERS CONTACT</h5>
                                </div>
                        </div>
                            </a>
                        </div>
                  
                </div>
            </div>
            </div>
           
           <!-- CURRENT POST SECTION -->
           <div class="postSection">
               <div class="container">
                   <div class="row">
                       <div class="col-md-6">
                           <div class="heading"><h3>Recent Products</h3></div>
                       </div>
                       <div class="col-md-6">
                           <div class="form-group">
                           
                                <select id="product_category" class="form-control" v-model="product_categorys.id" @change="selectCategory($event)">
                                    <option value="0">All</option>
                                <option v-for="(product_category, index) in product_categorys" :key="index.id" :value="product_category.id">{{product_category.category_name}}</option>
                                
                                </select> 
                            </div>
                       </div>
                   </div>
                   <div class="row mt-4">
                         <!-- PRODUCT POST CARD -->
                         <div class="mb-4 d-flex" style="justify-content:center;" v-for="(product, index) in productComputed" :key="index.id">
                       <div class="col-md-4 mb-4" v-if="products_to_show==product.category_id | products_to_show == 0" >
                           <a href="#" style="text-decoration:none; color:black" >
                             <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="/image/two-young-farmers-shake-hands-background-soil-spring_78774-21.jpg" alt="Card image cap">
                                <h4 class="card-title mt-3">{{product.product_title}}</h4>
                                <div class="card-body">
                                    <h5 class="card-text">
                                        <h6 class="text-muted">Product Description</h6>
                                        <div v-if="product.product_discription.length<100">{{ product.product_discription }}</div>
                                        <div v-else>{{ product.product_discription.substring(0,100)+" ..." }}</div>
                                         <!-- {{product.product_discription.slice(1, 100)}}...<i>more</i> -->
                                         
                                         </h5>
                                </div>
                                <div class="card-footer w-100 text-muted">
                                    <ul class="list-inline text-center">
                                        <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fa fa-phone"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fa fa-thumbs-up"><span class="ml-1">{{product.product_likes}}</span></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fa fa-eye"><span class="ml-1">{{product.total_view}}</span></i></a></li>
                                    </ul>
                                </div>
                        </div>
                          </a>
                          </div>
                       </div>

                   </div>
                   <div class="row">
                       <div class="col-md-12 text-center">
                           <button class="btn btn-dark p-2">VIEW ALL</button>
                       </div>
                   </div>
               </div>
           </div>
         </div> 
       </div>
             

</template>

<script>
$(document).ready(function(){
    $('.carousel').carousel({
    interval: 4000
    });
        $(window).scroll(function(){
        var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if(winOffset>50){
            $('.navbar').addClass('fadeIn navbar-light bg-white');
            $('footer').fadeIn();

        }else{
            $('.navbar').removeClass('fadeIn navbar-light bg-white');

        }
        });

        $('.arrow-down').click(function(){
            $('.main').fadeIn();
            $('html,body').animate({
            scrollTop: $(".page").offset().top
            },2000);
        });

});


     export default {
         data(){
             return {
                 products:[],
                 limitProduct:9,
                 product_categorys:{
                     id:0,
                 },
                 products_to_show:0,
             }
         },
         computed:{
            productComputed(){
                return this.limitProduct ? this.products.slice(0,this.limitProduct) : this.products;
                
            }
            },
         methods:{
             loadProducts(){
                axios.get('/product').then((response)=>{this.products=response.data;})
             },
             loadProductCategory(){
                axios.get('/productCategory').then((response)=>{this.product_categorys=response.data;});
             },
             selectCategory(event){
                this.products_to_show=event.target.value;
             }
         },
        created() {
          this.loadProducts();
         this.loadProductCategory();
           
        }
        
    }
</script>