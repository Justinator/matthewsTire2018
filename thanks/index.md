---
layout: single-column
title: Thank you!
heading: Thank you for your time and input.
description: Matthews Tire™ is the Fox River Valley’s best source for tires, service and awesome wheels. Customers in Green Bay, Appleton, Fond du Lac & Waupaca trust Matthews Tire.
---

Print out this page to use your "$10 off any service" coupon.

**Bonus:** Every six months we will randomly draw one name from all survey participants and award a year of FREE oil changes. (Oil changes not to exceed five (5) in a calendar year. Restrictions apply. See store for details.)

<div class="col-sm-8 center-block">
  <div class="coupon">
    <p>To show our appreciation, please enjoy...</p>
    <h2>$10 off any service purchase</h2>
    <p>(On purchases of $50 or more)</p>
    <p class="disclaimer">Coupon cannot be combined with any other discounts. One (1) coupon valid per store visit. One (1) coupon valid per household. Restrictions apply. See store for details.</p>
    <p class="expiration"></p>
  </div>
</div>

We take your opinions seriously and we encourage you to share your story with others by posting and/or rating Matthews Tire on your favorite online review site.

Although we strive to make every experience positive, in the rare instance that we haven't performed to expectations, we want to hear about it—and make it right. If you have a concern about the service or products you received at Matthews Tire, feel free to contact me at 920-734-5701.

Kind regards,  
Trevor Rezner, General Manager

<!-- This script generates the expiration date for the coupon and makes it two months from the current date -->
<script>
  // Create a date and add 14 days to it (in milliseconds)
  var d = new Date(+new Date + 5.184e9);
  // Convert the date to a string in the right format. Need to add one to month number because it's showing the wrong number for some reason
  var expirationDate = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();
  // Find the paragraphs with an .expiration class
  var expirationField = $(".expiration");
  // Insert the formatted expiration date into the paragraphs
  expirationField.text("Expires " + expirationDate);
</script>
