import PropTypes from 'prop-types';

const Sidebar = ({ categories }) => {
  return (
    <aside className="w-100 p-4 border-r">
      <h2 className="text-xl font-bold">Categories</h2>
      <ul className="menu">
        {categories.map((category, index) => (
          <li key={index} className="my-2">
            <a className="hover:text-blue-500">{category}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

// ตรวจสอบชนิดข้อมูลของ props ด้วย PropTypes
Sidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar;
