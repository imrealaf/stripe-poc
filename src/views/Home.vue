<template>
  <v-container class="text-center pa-10">
    <h1 class="display-2">Stripe Example</h1>
    <div class="mt-12">
      <p>Pay <strong>$2.00</strong> to post your ad</p>
      <stripe-checkout
        ref="checkoutRef"
        :pk="config.key"
        :lineItems="lineItems"
        mode="payment"
        :successUrl="config.successUrl"
        :cancelUrl="config.cancelUrl"
      >
        <template slot="checkout-button">
          <v-btn x-large rounded @click="checkout" color="primary"
            >Pay Now</v-btn
          >
        </template>
      </stripe-checkout>
    </div>
  </v-container>
</template>

<script>
import { StripeCheckout } from "vue-stripe-checkout";

export default {
  components: {
    StripeCheckout,
  },
  data() {
    return {
      error: null,
      config: {
        key:
          "pk_test_51HZpeBKXMmC2DVxUBs5UAENh7yiCMD54BepBc0mxgx7FqhTiQ4UHt3ePD3u5P0BwGEqgujXveuEMwsOVkOp6LclH00QnJMg2M5",
        mode: "payment",
        successUrl: "http://localhost:8080/success",
        cancelUrl: "http://localhost:8080",
      },
      lineItems: [
        {
          price: "price_1HbCL1KXMmC2DVxUPeQ9Atdq",
          quantity: 1,
        },
      ],
    };
  },

  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
