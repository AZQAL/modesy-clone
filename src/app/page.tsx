
import HeroBanner from "@/components/home/HeroBanner";
import ShopByCategory from "@/components/home/ShopByCategory";
import SpecialOffers from "@/components/home/SpecialOffers";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import NewArrivals from "@/components/home/NewArrivals";
import ShopByBrand from "@/components/home/ShopByBrand";
import LatestBlogPosts from "@/components/home/LatestBlogPosts";

export default function HomePage() {
  return (
    <>

      <main>
        <HeroBanner />
        <ShopByCategory />
        <SpecialOffers />
        <FeaturedProducts />
        <NewArrivals />
        <ShopByBrand />
        <LatestBlogPosts />
      </main>

    </>
  );
}
