---
layout: two-column
title: Promotions
category: promotions
heading: A Great Deal of Great Deals
description: Matthews Tire™ is the Fox River Valley’s best source for great deals and rebates on tires and service. Green Bay, Appleton, Fond du Lac & Waupaca trusts Matthews Tire.
images:
  - promotions_image_1.jpg
  - promotions_image_3.jpg
  - promotions_image_2.jpg
---

Matthews Tire™ is pleased to offer our customers coupons, monthly specials and frequent rebates. Check our website, “like” us on [Facebook](https://www.facebook.com/matthewstire) and check this promotions page often to stay updated on our current offers. Let us help you at 1 of our 6 retail [locations](/locations).
{: .hidden-print}

Also, don’t forget to apply for a [Goodyear credit card](http://www.thegoodyearcreditcard.com/index.html?gyID=90931) and get special offers just for cardholders!
{: .hidden-print}

<!-- This script loads a hidden iframe of the coupons so when print this page button is clicked on only the coupons will print -->
<script type="text/javascript">
var myVar = "coupons";
function loadOtherPage() {

    $("<iframe>")                             // create a new iframe element
        .hide()                               // make it invisible
        .attr("src", "../coupons") // point the iframe to the page you want to print
        .appendTo("body");                    // add iframe to the DOM to cause it to load the page

}
</script>

<a href="#" onClick="loadOtherPage()" class="btn btn-primary hidden-print">Print This Page</a>

<!-- To change promotions, go to _data/promotions.yml and edit there -->
 <div class="row">
{% for promotion in site.data.promotions reversed %}
  {% if promotion.lead %}
  <div class="col-md-12">
    <img src="../img/{{ promotion.image }}">
    <p class="disclaimer">{{ promotion.disclaimer }}</p>
  </div>
  {% else %}
  <div class="col-sm-6">
    <div class="coupon">
      <h1>{{ promotion.title }}</h1>
      <p>{{ promotion.description }}</p>
      {% if promotion.amount %}
      <h1>{{ promotion.amount }}</h1>
      {% endif %}
      <p class="disclaimer">{{ promotion.disclaimer }}</p>
      <p class="expiration"></p>
    </div>
  </div>
  {% endif %}
{% endfor %}
</div>



<!-- This script generates the expiration date for the coupons and makes it two weeks from the current date -->
<script>
  // Create a date and add 14 days to it (in milliseconds)
  var d = new Date(+new Date + 12096e5);
  // Convert the date to a string in the right format. Need to add one to month number because it's showing the wrong number for some reason
  var expirationDate = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();
  // Find the paragraphs with an .expiration class
  var expirationField = $(".expiration");
  // Insert the formatted expiration date into the paragraphs
  expirationField.text("Expires " + expirationDate);
</script>

---

Tire Brands Available at Matthews Tire

{% include tire-brands.html %}
