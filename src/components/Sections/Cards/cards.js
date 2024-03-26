/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CardType from './cardType';

function Cards({
  accessoriesList, jewelryList, bagsList, cookingList, babySewingList, pouchesList, promosList,
}) {
  const selectedFilters = useSelector((state) => state.products.selectedFilters);
  const inputValue = useSelector((state) => state.products.inputFilter);

  function normalizeString(input) {
    // Assurez-vous que l'input est une chaîne de caractères
    if (typeof input !== 'string') {
      return '';
    }
    // Supprime les accents
    const withoutAccents = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Supprime le "s" à la fin de la chaîne si présent
    const withoutPlural = withoutAccents.toLowerCase().replace(/s$/, '');
    return withoutPlural;
  }

  // Filtrer la liste en fonction des filtres sélectionnés
  const filteredList = [...accessoriesList || [], ...jewelryList || [], ...bagsList || [], ...cookingList || [], ...babySewingList || [], ...pouchesList || [], ...promosList || []].filter(
    (item) => {
      // Vérifiez si au moins un filtre est sélectionné
      if (selectedFilters.length === 0) {
        return true; // Aucun filtre sélectionné, inclure tous les éléments
      }
      // Vérifiez si le nom normalisé de l'élément est inclus dans les filtres sélectionnés
      const normalizedItemName = normalizeString(item.subcategory.name);
      return selectedFilters.some((filter) => normalizeString(filter) === normalizedItemName);
    },
  );

  console.log(filteredList);

  return (
    <section aria-label="Tous les produits" style={{ marginTop: '1em' }}>
      <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-6">
        {filteredList
          .filter((list) => list.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(inputValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))
          .map((list) => (
            <CardType
              key={list.id}
              {...list}
            />
          ))}
      </Row>
    </section>
  );
}

Cards.propTypes = {
  accessoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    }),
  ),
  jewelryList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    }),
  ),
  bagsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    }),
  ),
  cookingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    }),
  ),
  babySewingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    }),
  ),
  pouchesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    }),
  ),
  promosList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
    }),
  ),
};

export default Cards;
