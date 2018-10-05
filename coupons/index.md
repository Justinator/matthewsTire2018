---
layout: default
---

<div class="coupons-print">
{% for promotion in site.data.promotions reversed %}
  {% if promotion.lead %}
  <!--<div class="col-md-12">
    <img src="/img/{{ promotion.image }}">
    <p class="disclaimer">{{ promotion.disclaimer }}</p>
  </div>-->
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

<script type="text/javascript">
  $(document).ready(function () {
      window.print();
  });
</script>
