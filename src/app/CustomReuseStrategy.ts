import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {

  // لتحديد ما إذا كان يجب إعادة استخدام المسار الحالي أو لا
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // نقوم بإعادة استخدام المسار فقط إذا كان المسار نفسه
    return future.routeConfig === curr.routeConfig;
  }

  // استدعاء لتحديد ما إذا كان المسار سيتم تخزينه أو لا
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {}

  // لتحديد ما إذا كان يجب استرجاع المسار المخزن
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  // لتحديد ما إذا كان يجب تخزين المسار
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  // لاسترجاع المسار المخزن إذا كان موجودًا
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }
}