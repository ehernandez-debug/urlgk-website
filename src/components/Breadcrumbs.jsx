import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="w-full p-4 bg-muted/30 flex items-center justify-between">
      <nav aria-label="breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-primary">
              Inicio
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = value.charAt(0).toUpperCase() + value.slice(1);

            return (
              <li key={to} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4" />
                {isLast ? (
                  <span className="font-semibold text-foreground">{name}</span>
                ) : (
                  <Link to={to} className="hover:text-primary">
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <Button
        variant="outline"
        size="sm"
        className="md:hidden"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Volver
      </Button>
    </div>
  );
};

export default Breadcrumbs;
